export default function Todo({ task, isDone }) {
    
    // 3.
    return <h2>task: {task} {isDone || '(left to do)'}</h2>
    // 2.
    // return <h2>task: {task} ({isDone ? 'finished':'unfinished'})</h2>
    // 1.
    // if (isDone) {
    //     return <h2>task: {task}(finished)</h2>;

    // } else {
    //     return <h2>task: {task}(unfinished)</h2>;

    // }
}