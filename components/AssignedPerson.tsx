import { Person } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useAssignRole } from '@/lib/hooks';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const AssignedPerson = ({ person }: { person: Person }) => {
    const assign = useAssignRole();

    const handleRemove = () => {
        assign.mutate(
            { person_id: person.id, new_role: 'none' },
            {
                onError: (error: Error) => {
                    const message = error instanceof AxiosError ? error.response?.data?.detail : error.message || 'Unknown error' || 'Unknown error';
                    toast.error(message);
                }
            }
        );
    };

    return (
        <div className="flex items-center justify-between p-2 rounded bg-white">
            <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-xs text-gray-500">{person.role}</p>
            </div>
            <Button className='bg-gray-500 cursor-pointer' size="sm" onClick={handleRemove}>
                Delete
            </Button>
        </div>
    );
};