// Tipos específicos para cada banco
export interface PagoBanesco {
    tipo: 'banesco';
    reference_number: string;
    amount: number;
    currency_code: string;
    account_id: string;
    transaction_date: string;
    transaction_time: string;
    source_bank_id: string;
    dest_bank_id: string;
    concept: string;
    customer_id_ben: string;
    transaction_type: string;
    phone_number: string;
    ci_number: string;
  }
  
  export interface PagoBancaribe {
    tipo: 'bancaribe';
    cedula_cliente: string;
    fecha_transaccion: string;
    hora_transaccion: string;
    monto: number;
    telefono_cliente: string;
    estado_ejecucion: 0 | 1;
    descripcion: string;
    signo: 'C' | 'D';
    codigo_confirmacion: number;
    estado_transaccion: 'EJ' | 'ER' | 'PE';
    concepto: string;
  }
  
  export interface PagoBDV {
    tipo: 'bdv';
    reference_number: string;
    amount: number;
    destiny_phone: string;
    origin_phone: string;
    source_bank_id: string;
    document_number: string;
    transaction_date: string;
    transaction_register: string;
    code: number;
    message: string;
    status: string;
    reason: string;
  }
  
  export interface PagoGenerico {
    tipo: 'generico';
    referencia: string;
    monto: number;
    banco_receptor: string;
    cedula: string;
    fecha: string;
    telefono: string;
    titular: string;
    transferencia: boolean;
  }

  export type BancoKey = 'general' | 'bdv' | 'banesco' | 'bancaribe' | 'tesoro';
  
  export type Pago = PagoBanesco | PagoBancaribe | PagoBDV | PagoGenerico;
  export type BancoType = Exclude<Pago['tipo'], 'generico'> | 'general'; // Añadimos 'general'
  
  // Mapeo de tipos para fácil acceso
  export type PagoMap = {
    banesco: PagoBanesco;
    bancaribe: PagoBancaribe;
    bdv: PagoBDV;
    generico: PagoGenerico;
  };