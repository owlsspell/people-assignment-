import { Person } from '@/lib/types';
import { AssignedPerson } from './AssignedPerson';
import { AddPersonDropdown } from './AddPersonDropdown';

interface Props {
    title: string;
    role: Person['role']; // 'group1' | 'group2' | 'leader'
    assigned: Person[];
    unassigned: Person[]; // role === 'none'
}

export const GroupCard = ({ title, role, assigned, unassigned }: Props) => {
    return (
        <div className="border rounded p-4 space-y-4 bg-gray-100">
            <h2 className="text-lg font-semibold">{title}</h2>

            <div className="space-y-2 rounded border-0">
                {assigned.length === 0 ? (
                    <p className="text-sm text-gray-500 bg-white p-3 rounded">No one assigned yet</p>
                ) : (
                    assigned.map((person) => <AssignedPerson key={person.id} person={person} />)
                )}
            </div>

            <AddPersonDropdown role={role} candidates={unassigned} />
        </div>
    );
};