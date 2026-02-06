import type { Metadata } from 'next';
import OffshoringContent from './OffshoringContent';

export const metadata: Metadata = {
    title: 'Offshoring Solutions | Global Talent at Scale',
    description: 'Access skilled professionals worldwide with cost-efficient, scalable offshoring solutions tailored to your business growth.',
};

export default function OffshoringSolutionsPage() {
    return <OffshoringContent />;
}