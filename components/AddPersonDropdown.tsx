'use client';
import { Person } from '@/lib/types';
import { useAssignRole } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

interface Props {
    role: Person['role']; // target role
    candidates: Person[]; // people with role === 'none'
}

export const AddPersonDropdown = ({ role, candidates }: Props) => {
    const assign = useAssignRole();

    const handleAssign = (id: string) => {
        assign.mutate(
            { person_id: id, new_role: role },
            {
                onError: (error: Error) => {
                    const message = error instanceof AxiosError ? error.response?.data?.detail : error.message || 'Unknown error' || 'Unknown error';
                    toast.error(message);
                }
            }
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className='cursor-pointer'>+ Add</Button>
            </PopoverTrigger>
            <PopoverContent className="w-max p-1 ml-6">
                {candidates.length === 0 ? (
                    <p className="text-sm text-gray-500 p-3">No available people</p>
                ) : (
                    <ul className="space-y-1">
                        {candidates.map((person) => (
                            <li key={person.id}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start cursor-pointer px-4"
                                    onClick={() => handleAssign(person.id)}
                                >
                                    {person.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </PopoverContent>
        </Popover>
    );
};