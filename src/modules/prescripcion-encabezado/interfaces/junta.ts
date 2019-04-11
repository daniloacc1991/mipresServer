export interface PrescripcionEncabezadoJunta {
  NoPrescripcion: string;
  FPrescripcion: string;
  TipoIDPaciente: string;
  NroIDPaciente: string;
  PAPaciente: string;
  SAPaciente: string;
  PNPaciente: string;
  SNPaciente: string;
}

export interface PrescripcionDetalleJunta {
  TipoTecnologia: string;
  ConOrden: number;
  EstJM: number;
  prescripcion: PrescripcionEncabezadoJunta;
}