export class Pelicula{
    titulo;
    duracion;
    director;
    descripcion;
    genero;
    constructor(titulo, duracion, director, descripcion, genero) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
        this.descripcion = descripcion;
        this.genero = genero;
    }
    getTitulo() {
        return this.titulo;
    }
    getDuracion() {
        return this.duracion;
    }
    getDirector() {
        return this.director;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getGenero() {
        return this.genero;
    }   
    setTitulo(titulo) {
        this.titulo = titulo;
    }
}