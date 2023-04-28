const IP_ADDRESS = "45.144.66.250"

Events.run(EventType.ClientLoadEvent, () => {
    const servers = Reflect.get(Vars.ui.join, 'servers')
    const alreadyAdded = servers.find(s =>  Reflect.invoke(s, "displayIP") === IP_ADDRESS)
    if (!alreadyAdded) {
        const server = new JoinDialog.Server()
        Reflect.invoke(server, "setIP", [IP_ADDRESS], [java.lang.String]);
        servers.add(server)
        Reflect.invoke(Vars.ui.join, "saveServers");
    }
})
