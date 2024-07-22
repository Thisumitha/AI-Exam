import React from 'react'
import useSWR from 'swr';
import Read from '../components/ReadingPage/ReadingPage';


// Fetcher function for useSWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomeRead() {


  const Swr = () => {
    const { data, error, isValidating } = useSWR('https://opentdb.com/api.php?amount=20', fetcher);

    if (error) return <div>Failed to load</div>; // Handle error state
    if (isValidating) return <div>Loading...</div>; // Handle loading state
    if (!data) return null; // Handle null data

    return (
      <div>
        {data.results.map((question, index) => (
          <div key={index} className="py-4">
            <Read
              qNumber={index + 1}
              // passage={}
              question={question.question}
              answer={question.correct_answer}
            />
          </div>
        ))}
      </div>
    );
  };


  return (
    <div>
      <Swr />
    </div>
  )
}


