import axiosClient from '../../utils/axiosClient'
import config from '../../utils/config'
import assert from 'assert'

export const getToDo = async () => {
    const response = await axiosClient.get(
        `${config.toDoUrl}/todos/1`
    )
    assert.ok(response.status === 200, response.status.toString())
    return response.data
}