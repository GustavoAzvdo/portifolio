
import Image from 'next/image'
const About = () => {
    return (
        <div className='container grid grid-cols-12 mx-auto px-4 my-20'>
            <section className='col-span-10 col-start-2 flex flex-row gap-5'>
                <Image
                    src='/perfil.jpg'
                    alt='Foto de Perfil'
                    width={300}
                    height={300}
                />
                <div>
                    <h2 className='text-2xl font-bold text-'>Sobre Mim</h2>
                    <p className='text-lg'>
                        Sou um desenvolvedor web com experiência em criar interfaces de usuário
                        atraentes e funcionais. Minha paixão é transformar ideias em realidade
                        através do código.
                    </p>
                    <h2 className='text-2xl font-bold text-'>Minhas Stack</h2>

                </div>
            </section>
        </div>
    )
}

export default About