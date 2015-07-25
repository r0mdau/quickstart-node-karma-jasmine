'use strict';

function Personne(nom) {
    this.setPrenom('Romain');
    this.setNom(nom);
    setAge(this, 25);
}

function setAge(personne, age) {
    personne.age = age;
}

Personne.prototype.getPrenom = function () {
    return this.prenom;
};

Personne.prototype.setPrenom = function (prenom) {
    this.prenom = prenom;
};

Personne.prototype.getNom = function () {
    return this.nom;
};

Personne.prototype.setNom = function (nom) {
    this.nom = nom;
};

Personne.prototype.getAge = function () {
    return this.age;
};

Personne.prototype.setPrivateAge = function (age) {
    setAge(this, age);
};