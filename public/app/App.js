

class App {

    getElement(){
        return this.element;
    }

    setElement(element) {
        this.element = element;
        return this;
    }

    constructor (){
        this.init();
    }


    init() {
        this.setElement(
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
        ).addEnfant (
            new Element (
                {
                    x : '25vw',
                    y : '25vh'
                },
                'foret',
                {
                    x : '100px',
                    y : '100px'
                }

            )

        ).addEnfant (
            new Element (
                {
                    x : '25vw',
                    y : '25vh'
                },
                'foret',
                {
                    x : '200px',
                    y : '200px'
                }

            )
        ).addEnfant (
            new Element (
                {
                    x : '30vw',
                    y : '30vh'
                },
                'foret',
                {
                    x : '500px',
                    y : '700px'
                }
            )
        )
        ;
    }
    

}
