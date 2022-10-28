

class App {

    getElement(){
        return this.element;
    }

    setElement(element) {
        this.element = element;
        return element;
    }

    constructor (){
        this.init();
    }


    init() {
        this.setElement(
            // scene -----------
            new Element(
            {
                x : '100vw',
                y : '100vh'
            },
            'foret',
            {
                x : '0',
                y : '0'
            }
        )
        ).addEnfant(
            // joueur2 -----------
            new Element (
                {
                    x : '150px',
                    y : '150px'
                },
                'joueur2tete',
                {
                    x : '200px',
                    y : '500px'
                }

            )
        ).addEnfant(
            new Element (
                {
                    x : '176px',
                    y : '150px'
                },
                'joueur2corps',
                {
                    x : '200px',
                    y : '640px'
                }

            )
        ).addEnfant(
            new Element (
                {
                    x : '40px',
                    y : '19px'
                },
                'etoileninja',
                {
                    x : '340px',
                    y : '650px'
                }
            )
        ).addEnfant(
            // joueur1 -----------
            new Element (
                {
                    x : '150px',
                    y : '150px'
                },
                'joueur1tete',
                {
                    x : '700px',
                    y : '500px'
                }
            )
        ).addEnfant(
            new Element (
                {
                    x : '176px',
                    y : '150px'
                },
                'joueur1corps',
                {
                    x : '700px',
                    y : '635px'
                }
            )
        ).addEnfant(
            new Element (
                {
                    x : '40px',
                    y : '19px'
                },
                'etoileninja',
                {
                    x : '780px',
                    y : '670px'
                }
            )
        )
        ;
    }
    

}
