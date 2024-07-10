(() => {
  //-------------------------------------------------------------------------------------------------

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map((f) => f.f);

  //Refactorizado
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 2, toDelete: false },
    { id: 1, toDelete: false },
    { id: 3, toDelete: true },
    { id: 4, toDelete: false },
    { id: 5, toDelete: false },
    { id: 7, toDelete: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.toDelete);

  //-------------------------------------------------------------------------------------------------

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  //-------------------------------------------------------------------------------------------------

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();
  const currentDay = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;
  const daysPassed: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const countFilesInDirectory = 33;

  // primer nombre - first name
  const nombre = "Fernando";
  const firstName = "Fernando";

  // primer apellido - last name
  const apellido = "Herrera";
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent = 6;
})();
