package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2022;

//Ya no es necesario importar @Repository, en anteriores versiones si.
public interface EstudianteRepositorio extends JpaRepository<Estudiantes2022, Integer> {

}
