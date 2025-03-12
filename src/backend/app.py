from asyncio import sleep
from random import uniform

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="API da Atividade",
    version="1.0"
)

origins = [
    "http://localhost:80",
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/validate_data", name="Validação de dados")
async def validate_data() -> dict[str, bool]:
    await sleep(uniform(1, 3))
    return {"Success": True}


@app.get("/stock_conference", name="Conferência de estoque")
async def stock_conference() -> dict[str, bool]:
    await sleep(uniform(1, 3))
    return {"Success": True}


@app.get("/freight_calculation", name="Cálculo de frete")
async def freight_calculation() -> dict[str, bool]:
    await sleep(uniform(1, 3))
    return {"Success": True}


@app.post("/issuance_invoice", name="Emissão de nota fiscal")
async def issuance_invoice() -> dict[str, bool]:
    await sleep(uniform(1, 3))
    return {"Success": True}
