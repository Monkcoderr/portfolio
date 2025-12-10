import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import BentoLayout from './components/BentoLayout'
// Lazy load the grid for performance optimization
const PortfolioGrid = React.lazy(() => import('./components/PortfolioGrid'));

function App() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <Navbar />
            <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                <PortfolioGrid />
            </Suspense>
        </div>
    )
}

export default App
