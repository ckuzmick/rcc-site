'use client'

import { useState, useEffect } from 'react'

const LeadersPage = () => {
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        const fetchRevalidation = async () => {
            try {
                setMessage("Revalidating Leaders Page...")

                const res = await fetch('/api/revalidate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ path: '/leaders' }),
                })

                if (!res.ok) {
                    setMessage("Failed to revalidate Leaders")
                    throw new Error('Failed to revalidate Leaders')
                }

                setMessage("Revalidating News...")

                const resNews = await fetch('/api/revalidate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ path: '/news' }),
                })

                if (!resNews.ok) {
                    setMessage("Failed to revalidate News")
                    throw new Error('Failed to revalidate News')
                }

                const resNewsSlug = await fetch('/api/revalidate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ path: '/news/[slug]' }),
                })

                if (!resNewsSlug.ok) {
                    setMessage("Failed to revalidate News slug")
                    throw new Error('Failed to revalidate News slug')
                }

                setMessage("Revalidated")
            } catch (error) {
                console.error('Error fetching revalidation:', error)
                setMessage("Error Revalidating Leaders")
            }
        }

        fetchRevalidation()
    }, [])

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default LeadersPage
