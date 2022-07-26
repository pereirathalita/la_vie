const Psicologo = require("../models/Psicologo");
const bcrypt = require("bcryptjs");
const Atendimentos = require("../models/Atendimentos");

const psicologoController = {
  // GET ALL PSICOLOGOS

  listarPsicologo: async (req, res) => {
    try {
      const listaPsicologos = await Psicologo.findAll();
      res.status(200).json(listaPsicologos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //   GET PSICOLOGO POR ID

  async listarIdPsicologo(req, res) {
    try {
      const { id } = req.params;

      const ListaPsicologo = await Psicologo.findAll({
        where: {
          id: id,
        },
      });

      if (!ListaPsicologo) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(200).json(ListaPsicologo);
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  // POST PSICOLOGO

  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const newSenha = bcrypt.hashSync(senha, 10);

      const cadastraPsicologo = await Psicologo.create({
        nome,
        email,
        senha: newSenha,
        apresentacao,
      });

      if (!cadastraPsicologo) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        res.status(201).json(cadastraPsicologo);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //   PUT PSICOLOGO

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      const AtualizaPsicologo = await Psicologo.findOne({
        where: {
          id: id,
        },
      });

      if (!AtualizaPsicologo) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        await Psicologo.update(
          { nome, email, senha, apresentacao },
          { where: { id } }
        );
      }

      res.status(200).json("Informações do psicólogo atualizadas com sucesso!");
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // DELETE PSICOLOGO POR ID

  async deletarPsicologo(req, res) {
    try {
      const { id } = req.params;

      const deletar = await Psicologo.findOne({
        where: { id: id },
      });

      const verificaFK = await Atendimentos.findOne({
        where: { psicologo_id: id },
      });

      if (verificaFK?.psicologo_id == id) {
        res
          .status(404)
          .json(
            "Não é possível deletar psicólogos que já realizaram atendimento na clínica"
          );
      }

      if (!deletar) {
        res.status(404).json("Id não encontrado.");
      } else {
        await Psicologo.destroy({ where: { id } });
        return res.status(204).json("Psicólogo excluído com sucesso!");
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

module.exports = psicologoController;