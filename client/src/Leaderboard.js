import {useState, useEffect} from 'react'

function LeaderBoard({group}){


    return(
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>text1.1</td>
                        <td>text1.2</td>
                        <td>text1.3</td>
                    </tr>
                    <tr>
                        <td>text2.1</td>
                        <td>text2.2</td>
                        <td>text2.3</td>
                    </tr>
                    <tr>
                        <td>text3.1</td>
                        <td>text3.2</td>
                        <td>text3.3</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default LeaderBoard