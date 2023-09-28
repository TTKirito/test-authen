import { errors } from "./errors"

export const jsonSuccess = (result = null) => {
    return { success: true, result }
};
  
export const jsonError = (err: any) => {
    return { success: false, error: err }
};

export const handleExceptionResponse = (status = 500, res: any, err = errors.SYSTEM_ERROR) => {   
    return res.status(status).json(jsonError(err))
};

export const handleReturnResponse = (status: number, res: any, result: any) => {
    return res.status(status).json(jsonSuccess(result))
}