///<reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const customMap = new CustomMap('googleMap');

customMap.addMarker(user);
customMap.addMarker(new Company());
