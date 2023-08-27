import { PageProps } from '@/.next/types/app/page';
import VisitorLayout from '../components/Visitors/visitorLayout';
import VisitorList from '../components/Visitors/visitorList';


const Visitors = (props: PageProps) => {
    return (
        <VisitorLayout>
            <VisitorList />
        </VisitorLayout>
    )
}

export default Visitors;

