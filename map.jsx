render() {
        // 循环部分数据
        var loadComp = this.state.result.map(function (item) {
            return (
                <Col span={6} key={item.id}>
                    <Card bodyStyle={{padding: 0}}>
                        <a href={"#/home/" + item.id}>
                            <div className="custom-image">
                                <img alt="example" width="100%"
                                     src={item.url}/>
                            </div>
                            <div className="custom-card">
                                <h3>{item.name}</h3>
                                <p>{item.money}</p>
                            </div>
                        </a>
                    </Card>
                </Col>
            )
        });
        // 渲染到界面, 返回数据
        return (
            <div>
                <Row>
                    <Col offset={4}>
                        <Row>
                            {loadComp}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
