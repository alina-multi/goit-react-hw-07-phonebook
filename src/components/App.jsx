import '../index.css';
import ContactList from './ContactList/ContactList';
import FormField from './Form/FormField';
import Filter from './Filter/Filter';


export const App = () => {
  return (
    <div className="my-3">
      <div className="flex flex-col gap-6 max-w-md m-auto">
        <h1 className="text-3xl font-semibold text-center">Phonebook</h1>
        <FormField/>
        <Filter/>
        <ContactList/>
      </div>
    </div>
  );
};
