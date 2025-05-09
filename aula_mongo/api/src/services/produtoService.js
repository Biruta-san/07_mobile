import produtoRepository from "../repositories/produtoRepository";

const produtoService = {
  criarProduto: async (dto) => {
    if (!dto) throw new Error("Objeto nulo");
    if (dto.preco < 0) throw new Error("Preço negativo não permitido");
    return produtoRepository.criar(dto);
  },

  listarProdutos: () => {
    return produtoRepository.listarTodos();
  },

  obterProduto: async (id) => {
    const p = await produtoRepository.buscarPorId(id);
    if (!p) throw new Error("Produto não encontrado");
    return p;
  },

  atualizarProduto: async (id, dto) => {
    return produtoRepository.atualizar(id, dto);
  },

  removeProduto: async (id) => {
    return produtoRepository.deletar(id);
  },
};

export default produtoService;
