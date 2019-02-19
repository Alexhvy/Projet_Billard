

class Trou
{
    constructor(_x,_y)
    {
        this.x=_x
        this.y=_y
        this.size=15
    }

    showtrou()
    {
        fill(0)
        circle(this.x,this.y,this.size)
    }
}


class Table
{
    constructor()
    {
        this.vertX=0
        this.vertY=0
        this.vertXTaille=1600
        this.vertYTaille=800

        this.trous = []

        this.trous.push( new Trou(15,15) )
        this.trous.push( new Trou(this.vertXTaille-15,this.vertYTaille-15) )
        this.trous.push( new Trou(this.vertXTaille-15,15) )
        this.trous.push( new Trou(15,this.vertYTaille-15) )
        this.trous.push( new Trou(800,15) )
        this.trous.push( new Trou(800,800-15) )
    }

    show()
    {
        noStroke()
        fill(10,108,3)
        rect(this.vertX,this.vertY,this.vertXTaille,this.vertYTaille)
        for(let i=0;i<6;i++)
        {
            this.trous[i].showtrou()
        }
    }
}