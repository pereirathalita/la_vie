const Atendimento = require("../models/Atendimentos");

const atendimentoController = {
  // GET ALL ATENDIMENTOS

  listarAtendimento: async (req, res) => {
    try {
      const listaAtendimentos = await Atendimento.findAll();
      res.status(200).json(listaAtendimentos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // GET ATENDIMENTO POR ID

  async listarIdAtendimento(req, res) {
    try {
      const { id } = req.params;

      const ListaAtendimento = await Atendimento.findAll({
        where: {
          id: id,
        },
      });

      if (!ListaAtendimento) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(200).json(ListaAtendimento);
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  //   POST ATENDIMENTO

  async cadastrarAtendimento(req, res) {
    try {
      console.log(psicologo_id);
      const psicologo_id = req.auth.id;
      const { paciente_id, data_atendimento, observacao } = req.body;

      const cadastraAtendimento = await Atendimento.create({
        psicologo_id,
        paciente_id,
        data_atendimento,
        observacao,
      });

      if (!cadastraAtendimento) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        res.status(201).json(cadastraAtendimento);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

module.exports = atendimentoController;