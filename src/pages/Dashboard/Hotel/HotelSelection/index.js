/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHotels from '../../../../hooks/api/useHotels';
import { toast } from 'react-toastify';
import { Container, SessionTitle, CardsContainer } from './style';
import Card from '../Card';

export default function HotelSelection() {
  const [hotelsToSelect, setHotelsToSelect] = useState([]);
  const [hotelSelected, setHotelSelected] = useState(null);
  const navigate = useNavigate();

  const { hotels, hotelsError } = useHotels();

  useEffect(() => {
    if (hotels) {
      if (hotelsError?.error || hotels.length === 0) {
        toast('Ocorreu um erro ao tentar buscar os hotéis disponíveis!');
      }

      console.log(hotels);
      setHotelsToSelect(hotels);
    }
  }, [hotels]);

  function handleHotelSelection(hotelId) {
    console.log(hotelId);
  }
  
  return (
    <Container>
      <SessionTitle>Primeiro, escolha seu hotel</SessionTitle>

      <CardsContainer>
    
        {hotelsToSelect.map(
          (hotel) =>
            <Card
              id={hotel.id}
              name={hotel.name}
              imageUrl = {hotel.imageUrl}
              capacity={hotel.capacity}
              reservations={hotel.reservations}
              accommodationTypes={hotel.accommodationTypes}
              hotelSelected={hotelSelected}
              setHotelSelected={setHotelSelected}
            />
        )}
        
      </CardsContainer>

    </Container>
  );
}
