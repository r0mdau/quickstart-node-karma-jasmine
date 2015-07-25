'use strict';

describe("myFunction", function () {
    var personne;

    beforeEach(function () {
        personne = new Personne('dauby');
    });

    it("should be lastnamed dauby", function () {
        expect(personne.getNom()).toEqual('dauby');
    });

    it("should be able to change the name", function () {
        personne.setNom("dupont");
        expect(personne.getNom()).toEqual('dupont');
    });

    it("should be firstnamed romain", function () {
        expect(personne.getPrenom()).toEqual('Romain');
    });

    it("should be aged of 25", function () {
        expect(personne.getAge()).toEqual(25);
    });

    it("should not be able to set Age", function () {
        expect(personne.setAge).toBeUndefined();
    });

    it("should change the age using a rootkit", function () {
        personne.setPrivateAge(34);
        expect(personne.getAge()).toEqual(34);
    });

    it("should f*** them all public attributes ... dead smiley x/", function () {
        personne.age = 36;
        expect(personne.getAge()).toEqual(36);
    });
});