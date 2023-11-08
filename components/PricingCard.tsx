import { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'

interface PricingCardProps {
    name: string
    description?: string
    price: number
    features: string[]
    calltoaction?: string
}

const PricingCard: FC<PricingCardProps> = ({ name, description, price = 99, features, calltoaction = 'Book a call' }) => {
    return (
        <Card className='w-[380px]'>
            <CardHeader>
                <CardTitle className='flex justify-between'><div>{name}</div><div>${price}</div></CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    {features.map((featureName, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {featureName}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className=''>
                <Button>{calltoaction}</Button>
            </CardFooter>
        </Card>
    )
}

export default PricingCard