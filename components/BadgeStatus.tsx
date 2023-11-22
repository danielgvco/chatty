'use client'

import {
    CheckIcon,
    ClockIcon,
    MinusCircleIcon,
    XCircleIcon,
} from "@heroicons/react/outline";
import { Badge } from "@tremor/react";

import { FC } from 'react'

interface BadgeStatusProps {
    status: 'Paid' | 'Solved' | 'Completed' | 'Scheduled' | 'Pending' | 'Unpaid' | 'Cancelled';
}

const BadgeStatus: FC<BadgeStatusProps> = ({ status }) => {
    let icon;
    let color;
    let text;

    switch (status) {
        case 'Paid':
            icon = CheckIcon;
            color = 'green';
            text = 'Paid';
            break;
        case 'Solved':
            icon = CheckIcon;
            color = 'green';
            text = 'Solved';
            break;
        case 'Completed':
            icon = CheckIcon;
            color = 'green';
            text = 'Completed';
            break;
        case 'Scheduled':
            icon = ClockIcon;
            color = 'blue';
            text = 'Scheduled';
            break;
        case 'Pending':
            icon = ClockIcon;
            color = 'orange';
            text = 'Pending';
            break;
        case 'Unpaid':
            icon = MinusCircleIcon;
            color = 'red';
            text = 'Unpaid';
            break;
        case 'Cancelled':
            icon = XCircleIcon;
            color = 'gray';
            text = 'Cancelled';
            break;
    }

    return <Badge icon={icon} color={color}>{text}</Badge>;
}

export default BadgeStatus;
