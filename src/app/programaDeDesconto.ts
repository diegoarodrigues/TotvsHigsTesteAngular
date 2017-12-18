export class ProgramaDeDesconto {

    constructor(
      public codigoConsultor: string,
      public nomeCliente: string,
      public cpfCliente: string,
      public desconto?: string
    ) {  }
  
  }