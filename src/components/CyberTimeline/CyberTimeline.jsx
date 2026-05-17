import TimelineCard from '../TimelineCard/TimelineCard';
import './CyberTimeline.css';

/**
 * Línea de tiempo horizontal estilo "Chapters".
 *
 * @param {Object[]} items       - Arreglo de ítems de datos.
 * @param {string}   labelField  - Campo del item a mostrar como título (default: 'role')
 * @param {string}   subField    - Campo secundario (empresa/institución) (default: 'company')
 */
export default function CyberTimeline({ items, labelField = 'role', subField = 'company' }) {
    return (
        <div className="cyber-timeline-container">
            {/* Línea central de conexión SVG */}
            <svg className="timeline-svg" preserveAspectRatio="none">
                <line
                    x1="0" y1="50%"
                    x2="100%" y2="50%"
                    stroke="var(--cyber-primary)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    opacity="0.35"
                />
            </svg>

            {items.map((item, index) => (
                <TimelineCard
                    key={item.id}
                    item={item}
                    labelField={labelField}
                    subField={subField}
                    index={index}
                />
            ))}
        </div>
    );
}
