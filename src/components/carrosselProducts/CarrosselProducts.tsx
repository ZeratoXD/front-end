import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarrosselProdutos.css";

// Importando Modulos do Carrossel
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Produto from '../../models/Product';
import { buscar } from '../../services/Service';
import CardProduto from '../produtos/cardProdutos/CardProduto1';

function CarrosselProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);


    async function buscarProdutos() {
        try {
            await buscar("/produtos", setProdutos, {
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                <p>erro</p>
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            <div className="w-full bg-nude py-6">
                <Swiper className="swiper-produtos"
                    slidesPerView={3}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        hiddenClass: 'swiper-button-hidden',
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 8000
                    }}>
                    {produtos.map((produto) => (
                        <SwiperSlide>
                            <CardProduto key={produto.id} produto={produto} />
                        </SwiperSlide>
                    ))}
                    <div className='bg-dark-orange h-64'></div>
                </Swiper>
            </div>

        </>
    )
}

export default CarrosselProdutos