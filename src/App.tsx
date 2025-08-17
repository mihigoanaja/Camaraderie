import Message from './Message'
import Navbar from './components/Navbar'
import Starter from './components/Starter'
import Features from './components/Features'
import Footer from './components/Footer'
function App() {
	return (
		<div>
			<Navbar/>	
			<div className="container">
				<Starter/>
				<Features/>
				<div className="footer">
					<p>&copy; 2025 Camaraderie. All Rights Reserved.</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}
export default App;