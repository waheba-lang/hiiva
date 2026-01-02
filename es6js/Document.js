

//Exercice 1 pdf seance 1
class Document{
    constructor(a,b)
    {   this.id=a
        this.dateEdition=b}
}

class Livre extends Document{
    constructor(id,date1,titre,auteur){
        super(id,date1)
        this.titre=titre
        this.auteur=auteur
    }
    infoLivre(){
       return `Livre :id=${this.id} 
       titre =${this.titre} Auteur :${this.auteur}
       date Edition :${this.dateEdition}` 
    }
}
export  {Document,Livre}

