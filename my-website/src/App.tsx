import './App.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
            <h1 className="text-3xl font-semibold mb-6 text-center">
                🚧 Website under construction... 🚧
            </h1>
            <p className="text-gray-600 mb-8 text-center">
                Check back soon to see my coding portfolio in progress.
            </p>

            <div className="flex gap-6 items-center">
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={viteLogo}
                        alt="Vite logo"
                        className="h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        alt="React logo"
                        className="h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                        alt="TypeScript logo"
                        className="h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                        alt="TailwindCSS logo"
                        className="h-10 hover:scale-110 transition-transform"
                    />
                </a>
            </div>
        </div>
    )
}

export default App
