import { message } from "antd";

message.config({
    top: 30,
    maxCount: 3,
})

const message_success = (text,timeout) => {
    message.success({
        content: text,
        duration: timeout,
    })
}

const message_warning = (text,timeout) => {
    message.warning({
        content: text,
        duration: timeout,
    })
}

const message_error = (text,timeout) => {
    message.error({
        content: text,
        duration: timeout,
    })
}

const message_loading = (text,timeout) => {
    message.loading({
        content: text,
        duration: timeout,
    })
}

export {
    message_success,
    message_warning,
    message_error,
    message_loading,
}