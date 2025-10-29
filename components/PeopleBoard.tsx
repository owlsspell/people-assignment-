import { usePeople } from '@/lib/hooks';
import { GroupCard } from './GroupCard';
import { Spinner } from './ui/spinner';

export const PeopleBoard = () => {
    const { data } = usePeople();

    if (!data) return <div className='w-full min-h-32 flex justify-center items-center '>
        <div>
            <Spinner />
        </div>
    </div>;

    const grouped = {
        leader: data.filter(p => p.role === 'leader'),
        group1: data.filter(p => p.role === 'group1'),
        group2: data.filter(p => p.role === 'group2'),
        none: data.filter(p => p.role === 'none'),
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <GroupCard title="Project Leader" role="leader" assigned={grouped.leader} unassigned={grouped.none} />
                <GroupCard title="Group #1" role="group1" assigned={grouped.group1} unassigned={grouped.none} />
                <GroupCard title="Group #2" role="group2" assigned={grouped.group2} unassigned={grouped.none} />
            </div>
        </>
    );
};