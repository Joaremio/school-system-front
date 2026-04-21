export enum GradeLevel {
  QUINTO_ANO = "QUINTO_ANO",
  SEXTO_ANO = "SEXTO_ANO",
  SETIMO_ANO = "SETIMO_ANO",
}

export const GradeLevelLabels: Record<GradeLevel, string> = {
  [GradeLevel.QUINTO_ANO]: "5º Ano ",
  [GradeLevel.SEXTO_ANO]: "6º Ano",
  [GradeLevel.SETIMO_ANO]: "7º Ano",
};
