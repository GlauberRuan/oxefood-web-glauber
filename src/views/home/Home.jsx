import React from 'react'; // Não esquece de importar o React se precisar
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home() {

    return (
        <div>
            <div style={{ marginTop: '5%' }}>
                <Container>
                    {/* Adicionei o verticalAlign='middle' pra alinhar o texto com o meio da logo */}
                    <Grid columns={2} divided verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column>
                                {/* O src da imagem tem que estar certo na pasta public */}
                                <Image src='/logo-IFPE.png' size='large' />
                            </Grid.Column>
                            
                            <Grid.Column>
                                Bem vindo ao sistema <strong>OxeFood</strong> ! <br />
                                Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III. <br /> <br />
                                
                                Para acessar o código da <strong>API</strong> do sistema, acesse: <a href='https://github.com/robertoalencar/oxefood-api' target='_blank' rel="noreferrer"> https://github.com/robertoalencar/oxefood-api </a> <br /> <br />
                                
                                Para acessar o código do <strong>Módulo WEB</strong>, acesse: <a href='https://github.com/robertoalencar/oxefood-web' target='_blank' rel="noreferrer"> https://github.com/robertoalencar/oxefood-web </a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}