Object.prototype.setAtr = function(nom, valeur) {
    this.setAttribute(nom, valeur);
    return this;
}

//On crée une fonction qui permet d'attacher une liste d'événements qui va permettre de s'ajouter dans la fonction build() de la class Element
Object.prototype.attachEvents = function (events, element) {
    for(const event in events){
        // utiliser hasOwnProperty() pour tester l'existence d'une propriété
        if(events.hasOwnProperty(event)){
            this.addEventListener(event, events[event].bind(element));
        }
    }
    return this;// Avec cette méthode, on généralise au prototype.setAttribute
}