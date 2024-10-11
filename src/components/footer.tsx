export default function Footer(){
    return(
        <footer className="foot" style={{backgroundColor: "#023047", color: "balck", padding: "10px", textAlign: "center"}}>
            <p>&copy; Designed by Hoorain {new Date().getFullYear()}.</p>
            <p> All rights reserved.</p>
        </footer>
    );
}