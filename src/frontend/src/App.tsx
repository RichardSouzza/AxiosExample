import axios, { AxiosResponse } from "axios";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { ToastContainer, toast } from 'react-toastify';


function App() {
    const _axios = axios.create({
        baseURL: "http://localhost:8000",
        headers: {"Access-Control-Allow-Origin": "http://localhost:8000"},
        timeout: 10000,
      });
    
    const showToast = (promise: Promise<AxiosResponse<any, any>>, pendingMessage: string, successMessage: string) => {
        toast.promise(promise, {
            pending: {
                render() {
                    return pendingMessage;
                },
            },
            success: {
                render() {
                    return successMessage;
                },
            },
            error: {
                render() {
                    return "Ocorreu um erro na requisição!";
                }
            }
        })
    };

    const validateDataRequest = async () => {
        const promise = _axios.get("/validate_data");
        showToast(promise, "Validando dados...", "Dados validados com sucesso!");
        return promise;
    };

    const stockConferenceRequest = async () => {
        const promise = _axios.get("/stock_conference");
        showToast(promise, "Conferindo estoque...", "Estoque conferido com sucesso!");
        return promise;
    };

    const freightCalculationRequest = async () => {
        const promise = _axios.get("/freight_calculation");
        showToast(promise, "Calculando frete...", "Frete calculado com sucesso!");
        return promise;
    };

    const issuanceInvoiceRequest = async () => {
        const promise = _axios.post("/issuance_invoice");
        showToast(promise, "Emitindo nota fiscal...", "Nota fiscal emitida com sucesso!");
        return promise;
    };

    const sendRequests = async () => {
        await validateDataRequest();
        await stockConferenceRequest();
        await freightCalculationRequest();
        await issuanceInvoiceRequest();
    };

    const sendAsyncRequests = async () => {
        validateDataRequest();
        stockConferenceRequest();
        freightCalculationRequest();
        issuanceInvoiceRequest();
    };

    return (
        <>
            <ToastContainer theme="colored" />
            
            <div className="w-full h-full bg-hero bg-cover bg-center bg-no-repeat absolute -z-10"></div>  

            <div className="flex flex-col justify-center items-center min-h-screen relative backdrop-blur text-white">
                <Card isBlurred className="flex flex-col gap-2 px-16 py-6">
                    <CardHeader className="flex justify-center">
                        <h1 className="text-4xl">Bem-vindo!</h1>
                    </CardHeader>

                    <CardBody className="flex flex-col gap-4">
                        <Button variant="light" className="border border-gray-500" onPressEnd={sendRequests}>Enviar requisições síncronas</Button>
                        <Button variant="light" className="border border-gray-500" onPressEnd={sendAsyncRequests}>Enviar requisições assíncronas</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default App;
