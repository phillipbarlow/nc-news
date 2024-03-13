import { Routes, Route, Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
        <h1>Phil's News read all about it!</h1>
        <button><Link to={'/'}>Home</Link></button>
        <nav>
            <ol>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
            </ol>
        </nav>
        </header>
    )
}