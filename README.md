lifetime hooks:
    
    MOUNTING:
        constructor() => render() => componentDidMount()
    
    UPDATES:
        New Props  \
                      => render() => componentDidUpdate()
        setStqte() /
            
    UNMOUNTING:
        constructor() => render() => componentWillUnmount()
    
    ERROR:
        constructor() => render() => componentDidCatch()