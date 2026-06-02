import { CalendarCheck } from 'lucide-react';
import { BARBER_APP_LINK } from '../data/siteData.js';
export default function FloatingCTA(){return <a className="floating-cta" href={BARBER_APP_LINK} target="_blank"><CalendarCheck size={18}/> Agendar</a>}
