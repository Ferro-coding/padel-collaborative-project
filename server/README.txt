Non avendo mai utilizzato questa tecnologia, ho deciso di costruire un server backend per arricchire il mio bagaglio culturale. Per evitare problemi nel periodo prima della consegna, non ho integrato immediatamente le due tecnologie. Tuttavia, ho compreso come visualizzare i dati inseriti nel backend in formato JSON sul frontend.






codice App.js per mettere a schermo i dati di server.js (server)
--------------------------------------------------

const [backendData, setBackendData] = useState([{}])


useEffect(() =>{
    fetch("/api).then(
        response => response.json()
    ).then(
        data => {
            setBackendData(data)
        }
    )
}, [])


return(
    {(typeof backendData.users === 'undefined) ? (
        <p>Loading...</p>
    ): (
        backendData.users.map((user, i) =>(
            <p key={i}>{users}</p>
        ))
    )}
)


----------------------------------------------------