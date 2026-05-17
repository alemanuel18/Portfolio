import { motion } from 'framer-motion';
import './CyberSplitPanel.css';

/**
 * Panel izquierdo: recuadro oscuro trapezoidal (imagen, gráfico, etc.)
 * Panel derecho: contenido de texto/datos.
 *
 * @param {ReactNode} leftContent   - Contenido del panel izquierdo (imagen, icono, etc.)
 * @param {ReactNode} rightContent  - Contenido del panel derecho (título, metadatos, etc.)
 * @param {string}    leftClipPath  - clip-path personalizado para el panel izquierdo (opcional)
 */
export default function CyberSplitPanel({ leftContent, rightContent, leftClipPath }) {
    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const rightVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } }
    };

    return (
        <div className="cyber-split-panel">
            {/* Panel izquierdo oscuro con clip-path trapezoidal */}
            <motion.div className="csp-left" variants={leftVariants}>
                <div
                    className="csp-left-inner"
                    style={leftClipPath ? { clipPath: leftClipPath } : undefined}
                >
                    <div className="csp-filter" />
                    {leftContent}
                </div>
            </motion.div>

            {/* Panel derecho con el contenido informativo */}
            <motion.div className="csp-right" variants={rightVariants}>
                {rightContent}
            </motion.div>
        </div>
    );
}
