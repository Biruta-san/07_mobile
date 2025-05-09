import produtoService from "../services/produtoService";

const produtoController = {
  criar: async (req, res, next) => {
    try {
      const criado = await produtoService.criarProduto(req.body);
      return res.status(201).json(criado);
    } catch (e) {
      next(e);
    }
  },

  listar: async (req, res, next) => {
    try {
      const list = await produtoService.listarProdutos();
      return res.status(200).json(list);
    } catch (e) {
      next(e);
    }
  },

  obter: async (req, res, next) => {
    try {
      const p = await produtoService.obterProduto(req.params.id);
      return res.status(200).json(p);
    } catch (e) {
      next(e);
    }
  },

  atualizar: async (req, res, next) => {
    try {
      const update = await produtoService.atualizarProduto(
        req.params.id,
        req.body
      );
      return res.status(200).json(update);
    } catch (e) {
      next(e);
    }
  },

  deletar: async (req, res, next) => {
    try {
      await produtoService.removeProduto(req.params.id);
      return res.status(204).end();
    } catch (e) {
      next(e);
    }
  },
};

export default produtoController;
