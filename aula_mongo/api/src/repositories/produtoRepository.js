import Produto from "../models/Produto";

const produtoRepository = {
  criar: async (data) => {
    const p = new Produto(data);
    return p.save();
  },

  listarTodos: async () => {
    return Produto.find().lean();
  },

  buscarPorId: async (id) => {
    return Produto.findById(id).lean();
  },

  atualizar: async (id, data) => {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean();
  },

  deletar: async (id) => {
    return Produto.findByIdAndDelete(id).lean();
  },
};

export default produtoRepository;
