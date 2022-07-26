const Paciente = require("../models/Paciente");

const pacienteController = {
  // GET ALL PACIENTES

  listarPaciente: async (req, res) => {
    try {
      const listaPaciente = await Paciente.findAll();
      res.status(200).json(listaPaciente);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // GET PACIENTE POR ID

  async listarIdPaciente(req, res) {
    try {
      const { id } = req.params;

      const ListaPaciente = await Paciente.findAll({
        where: {
          id: id,
        },
      });

      if (!ListaPaciente) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(200).json(ListaPaciente);
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  //   POST PACIENTE

  async cadastrarPaciente(req, res) {
    try {
      const { nome, email, idade } = req.body;

      const casdastraPaciente = await Paciente.create({
        nome,
        email,
        idade,
      });

      if (!casdastraPaciente) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        res.status(201).json(casdastraPaciente);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //   PUT PACIENTE

  async atualizarPaciente(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;

      const AtualizaPaciente = await Paciente.findOne({
        where: {
          id: id,
        },
      });

      if (!AtualizaPaciente) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        await Paciente.update({ nome, email, idade }, { where: { id } });
      }

      res.status(200).json("Informações do paciente atualizadas com sucesso!");
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // DELETE PACIENTE POR ID

  async deletarPaciente(req, res) {
    try {
      const { id } = req.params;

      const deletar = await Paciente.destroy({
        where: {
          id: id,
        },
      });

      if (!deletar) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(204).json("Paciente excluído com sucesso!");
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

module.exports = pacienteController;